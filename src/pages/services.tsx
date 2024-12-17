import { ArrowRight, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Services() {
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]" />
              <TableHead className="w-[140px]">Identificador</TableHead>
              <TableHead className="w-[180px]">Realizado há</TableHead>
              <TableHead className="w-[140px]">Status</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="w-[140px]">Total</TableHead>
              <TableHead className="w-[164px]" />
              <TableHead className="w-[132px]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 12 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <Search className="size-3" />
                      <span className="sr-only">Detalhes do serviço</span>
                    </Button>
                  </TableCell>
                  <TableCell className="text-xs font-medium">
                    s4q1duojdle7r4k0syec3gtq
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    há 7 dias
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span className="font-medium text-muted-foreground">
                        Pendente
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">Richard Quitzon</TableCell>
                  <TableCell className="font-medium">R$ 22,30</TableCell>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <ArrowRight className="mr-2 size-4" />
                      Aprovar
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="xs">
                      <X className="mr-2 size-4" />
                      Cancelar
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
